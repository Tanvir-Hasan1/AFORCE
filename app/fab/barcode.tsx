import { moderateScale } from 'react-native-size-matters';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function BarcodeScannerScreen() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [productDetected, setProductDetected] = useState(false);
  const [isFlashOn, setIsFlashOn] = useState(false);

  useEffect(() => {
    if (permission && !permission.granted && permission.canAskAgain) {
      requestPermission();
    }
  }, [permission]);

  const handleBarcodeScanned = ({ type, data }: { type: string; data: string }) => {
    if (!productDetected) {
      // In a real app we would call an API with the extracted barcode `data`.
      setProductDetected(true);
    }
  };

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', padding: 20 }]}>
        <Text style={{ color: COLORS.text, fontSize: 18, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' }}>
          We need your permission to use the camera for finding your products.
        </Text>
        <TouchableOpacity style={styles.logBtn} onPress={requestPermission}>
          <Text style={styles.logBtnText}>Grant Camera Permission</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.closeBtn, { marginTop: 40, backgroundColor: COLORS.border, borderRadius: 22 }]} onPress={() => router.back()}>
          <Ionicons name="close" size={24} color={COLORS.text} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* ACTIVE HARDWARE CAMERA LAYER */}
      <CameraView 
        style={StyleSheet.absoluteFillObject} 
        facing="back"
        enableTorch={isFlashOn}
        onBarcodeScanned={productDetected ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "ean13", "ean8", "pdf417", "upc_e", "upc_a"],
        }}
      />

      {/* CUSTOM HEADER */}
      <SafeAreaView style={styles.header}>
        <TouchableOpacity style={styles.closeBtn} onPress={() => router.back()}>
          <Ionicons name="close" size={28} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Scan AForce Product</Text>
        <View style={{ width: 44 }} />
      </SafeAreaView>

      {/* RETICLE OVERLAY */}
      <View style={styles.overlayFrame}>
        <View style={[styles.corner, styles.topLeft]} />
        <View style={[styles.corner, styles.topRight]} />
        <View style={[styles.corner, styles.bottomLeft]} />
        <View style={[styles.corner, styles.bottomRight]} />
        <View style={styles.scanLine} />
      </View>

      {/* DYNAMIC INSTRUCTIONS */}
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionText}>Align the barcode within the frame</Text>
        <Text style={styles.instructionSubText}>Scan barcode OR detect product</Text>
      </View>

      {/* FLOATING ACTION SIDE BUTTONS */}
      <View style={styles.sideControls}>
        <TouchableOpacity style={styles.sideBtn} onPress={() => setIsFlashOn(!isFlashOn)}>
          <Ionicons name={isFlashOn ? "flash" : "flash-outline"} size={20} color={isFlashOn ? COLORS.primary : COLORS.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideBtn}>
          <Ionicons name="help" size={24} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      {/* PRODUCT DETECTED BOTTOM SHEET */}
      {productDetected && (
        <View style={styles.bottomSheet}>
          <View style={styles.sheetHandle} />
          
          <View style={styles.productRow}>
            <View style={styles.productImgBox}>
              <Ionicons name="cube-outline" size={40} color="#666" />
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>AForce Electrolyte Stick</Text>
              <Text style={styles.productSubTitle}>Berry Blast • 500ml</Text>
              
              <Text style={styles.productStats}>HYDRATION BOOST +12</Text>
              <Text style={styles.productStats}>ELECTROLYTES +8</Text>
              <Text style={styles.productStats}>RECOVERY +4</Text>
            </View>
          </View>

          <View style={styles.sheetActions}>
            <TouchableOpacity style={styles.logBtn} onPress={() => router.replace('/log/success' as any)}>
              <Ionicons name="add-circle-outline" size={20} color={COLORS.background} style={{ marginRight: 8 }} />
              <Text style={styles.logBtnText}>Log Intake</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoBtn}>
              <Ionicons name="information-circle-outline" size={24} color={COLORS.text} />
            </TouchableOpacity>
          </View>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: moderateScale(20), paddingTop: moderateScale(20), zIndex: 10 },
  closeBtn: { width: moderateScale(44), height: moderateScale(44), alignItems: 'center', justifyContent: 'center' },
  title: { color: COLORS.text, fontSize: moderateScale(18), fontWeight: 'bold' },
  overlayFrame: { position: 'absolute', top: '35%', left: '15%', width: '70%', height: moderateScale(250), zIndex: 5 },
  corner: { position: 'absolute', width: moderateScale(40), height: moderateScale(40), borderColor: COLORS.primary, borderWidth: 0 },
  topLeft: { top: moderateScale(0), left: moderateScale(0), borderTopWidth: 4, borderLeftWidth: 4, borderTopLeftRadius: 12 },
  topRight: { top: moderateScale(0), right: moderateScale(0), borderTopWidth: 4, borderRightWidth: 4, borderTopRightRadius: 12 },
  bottomLeft: { bottom: moderateScale(0), left: moderateScale(0), borderBottomWidth: 4, borderLeftWidth: 4, borderBottomLeftRadius: 12 },
  bottomRight: { bottom: moderateScale(0), right: moderateScale(0), borderBottomWidth: 4, borderRightWidth: 4, borderBottomRightRadius: 12 },
  scanLine: { width: '100%', height: moderateScale(2), backgroundColor: COLORS.primary, top: '50%', shadowColor: COLORS.primary, shadowOffset: { width: moderateScale(0), height: moderateScale(0) }, shadowOpacity: 1, shadowRadius: 10, elevation: 5 },
  instructionsContainer: { position: 'absolute', top: '70%', width: '100%', alignItems: 'center', zIndex: 5 },
  instructionText: { color: '#CCC', fontSize: moderateScale(13), fontWeight: '500', marginBottom: moderateScale(12) },
  instructionSubText: { color: COLORS.primary, fontSize: moderateScale(14), fontWeight: 'bold', textShadowColor: COLORS.primary, textShadowOffset: { width: moderateScale(0), height: moderateScale(0) }, textShadowRadius: 8 },
  sideControls: { position: 'absolute', right: moderateScale(20), top: '45%', gap: moderateScale(16), zIndex: 10 },
  sideBtn: { width: moderateScale(48), height: moderateScale(48), borderRadius: moderateScale(24), backgroundColor: 'rgba(30,30,30,0.8)', alignItems: 'center', justifyContent: 'center' },
  bottomSheet: { position: 'absolute', bottom: moderateScale(0), width: '100%', backgroundColor: COLORS.card, borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: moderateScale(24), zIndex: 20 },
  sheetHandle: { width: moderateScale(40), height: moderateScale(4), backgroundColor: '#333', borderRadius: moderateScale(2), alignSelf: 'center', marginBottom: moderateScale(24) },
  productRow: { flexDirection: 'row', marginBottom: moderateScale(24) },
  productImgBox: { width: moderateScale(80), height: moderateScale(80), borderRadius: moderateScale(16), backgroundColor: COLORS.text, alignItems: 'center', justifyContent: 'center', marginRight: moderateScale(16) },
  productInfo: { flex: 1, justifyContent: 'center' },
  productTitle: { color: COLORS.text, fontSize: moderateScale(18), fontWeight: 'bold', marginBottom: moderateScale(4) },
  productSubTitle: { color: COLORS.textDim, fontSize: moderateScale(13), marginBottom: moderateScale(10) },
  productStats: { color: COLORS.primary, fontSize: moderateScale(10), fontWeight: 'bold', letterSpacing: 1, marginBottom: moderateScale(4) },
  sheetActions: { flexDirection: 'row', gap: moderateScale(14) },
  logBtn: { flex: 1, backgroundColor: COLORS.primary, borderRadius: moderateScale(12), paddingVertical: moderateScale(16), paddingHorizontal: moderateScale(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  logBtnText: { color: COLORS.background, fontSize: moderateScale(16), fontWeight: 'bold' },
  infoBtn: { width: moderateScale(56), height: moderateScale(56), borderRadius: moderateScale(12), backgroundColor: COLORS.border, alignItems: 'center', justifyContent: 'center' }
});

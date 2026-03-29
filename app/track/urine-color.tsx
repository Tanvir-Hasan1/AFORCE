import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../constants/theme';
import { CustomHeader } from '../../components/ui/CustomHeader';
import { UrineScoreCard } from '../../components/tabs/home/hydration-control-center/urine-color/UrineScoreCard';
import { ColorGrid } from '../../components/tabs/home/hydration-control-center/urine-color/ColorGrid';
import { ProtocolCard } from '../../components/tabs/home/hydration-control-center/urine-color/ProtocolCard';

export default function UrineColorScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader 
        title="Urine Color" 
      />
      
      <ScrollView 
        contentContainerStyle={styles.content} 
        showsVerticalScrollIndicator={false}
      >
        <UrineScoreCard />
        <ColorGrid />
        <ProtocolCard />
      </ScrollView>

      {/* Fixed Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.mainBtn} activeOpacity={0.8}>
          <Text style={styles.mainBtnText}>Update Hydration Status</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: moderateScale(20),
    paddingBottom: moderateScale(120),
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: moderateScale(20),
    backgroundColor: COLORS.background,
    paddingBottom: moderateScale(40),
  },
  mainBtn: {
    backgroundColor: COLORS.text, // White background as in image
    borderRadius: moderateScale(16),
    paddingVertical: moderateScale(20),
    alignItems: 'center',
    shadowColor: COLORS.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  mainBtnText: {
    color: COLORS.background, // Black text as in image
    fontSize: moderateScale(18),
    fontWeight: '800',
  },
});

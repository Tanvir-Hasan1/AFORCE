import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../../constants/theme';

export const RecommendedFuel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>RECOMMENDED FUEL</Text>
      </View>
      
      <View style={styles.card}>
        <View style={styles.productInfo}>
          <Image 
            source={{ uri: 'https://cdn.shopify.com/s/files/1/0533/0845/7140/products/stick-pack-berry_800x.png?v=1614343202' }} // Replace with actual asset
            style={styles.productImage} 
          />
          <View style={styles.details}>
            <Text style={styles.productTitle}>1 AFORCE HYDRATION STICK</Text>
            <Text style={styles.productSub}>AFTER WORKOUT INTEGRATION</Text>
            <View style={styles.priceRow}>
              <Text style={styles.priceText}>$2.49</Text>
              <Text style={styles.oldPriceText}>$4.00</Text>
            </View>
          </View>
        </View>
        
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: moderateScale(20), marginBottom: moderateScale(100), marginHorizontal: moderateScale(20) },
  card: { backgroundColor: '#1A1C00', borderRadius: moderateScale(20), padding: moderateScale(16), borderWidth: 1, borderColor: '#2B3300' },
  badge: { backgroundColor: COLORS.primary, alignSelf: 'flex-start', paddingHorizontal: moderateScale(12), paddingVertical: moderateScale(6), borderRadius: moderateScale(4), marginBottom: moderateScale(-10), zIndex: 1, marginLeft: moderateScale(16) },
  badgeText: { color: 'black', fontSize: moderateScale(10), fontWeight: '900' },
  productInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: moderateScale(16) },
  productImage: { width: moderateScale(80), height: moderateScale(80), backgroundColor: 'white', borderRadius: moderateScale(12) },
  details: { marginLeft: moderateScale(16), flex: 1 },
  productTitle: { color: 'white', fontSize: moderateScale(16), fontWeight: '900' },
  productSub: { color: COLORS.primary, fontSize: moderateScale(10), fontWeight: '900', letterSpacing: 0.5, marginVertical: 4 },
  priceRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  priceText: { color: 'white', fontSize: moderateScale(22), fontWeight: '900' },
  oldPriceText: { color: '#555', fontSize: moderateScale(14), textDecorationLine: 'line-through' },
  addBtn: { backgroundColor: COLORS.primary, paddingVertical: moderateScale(14), borderRadius: moderateScale(12), alignItems: 'center' },
  addBtnText: { color: 'black', fontSize: moderateScale(15), fontWeight: '900' },
});

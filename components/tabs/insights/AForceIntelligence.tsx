import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export const AForceIntelligence = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>AFORCE INTELLIGENCE</Text>
      
      {/* Immediate Action Card */}
      <View style={styles.actionCard}>
        <View style={styles.actionHeader}>
          <Ionicons name="bulb-outline" size={20} color="black" />
          <Text style={styles.actionTag}>IMMEDIATE ACTION</Text>
        </View>
        <Text style={styles.actionTitle}>
          Your sweat rate increased by 18%. Add 500ml electrolytes now.
        </Text>
        <TouchableOpacity style={styles.logBtn}>
          <Text style={styles.logBtnText}>LOG AFORCE STICK</Text>
        </TouchableOpacity>
        
        {/* Background Flash Icon Mock */}
        <Ionicons name="flash" size={120} color="rgba(0,0,0,0.05)" style={styles.bgIcon} />
      </View>

      {/* Metabolic Efficiency Card */}
      <View style={styles.insightCard}>
        <View style={styles.insightRow}>
          <View style={styles.insightIconContainer}>
            <Ionicons name="flame-outline" size={20} color={COLORS.primary} />
          </View>
          <View style={styles.insightTextContainer}>
            <Text style={styles.insightTitle}>Metabolic Efficiency</Text>
            <Text style={styles.insightDesc}>
                Stable hydration is improving muscle recovery and reducing fatigue during workouts.
            </Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.secondaryBtn}>
            <Text style={styles.secondaryBtnText}>ANALYZE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn}>
            <Text style={styles.secondaryBtnText}>DISMISS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: moderateScale(20), marginBottom: moderateScale(10) },
  sectionTitle: { color: '#444', fontSize: moderateScale(11), fontWeight: '900', letterSpacing: 1, marginBottom: moderateScale(16) },
  
  actionCard: { 
    backgroundColor: COLORS.primary, 
    borderRadius: moderateScale(20), 
    padding: moderateScale(20), 
    marginBottom: moderateScale(16),
    overflow: 'hidden'
  },
  actionHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  actionTag: { color: 'black', fontSize: moderateScale(11), fontWeight: '900' },
  actionTitle: { color: 'black', fontSize: moderateScale(18), fontWeight: 'bold', lineHeight: 24, marginBottom: 20, width: '90%' },
  logBtn: { backgroundColor: 'black', height: moderateScale(48), borderRadius: moderateScale(12), alignItems: 'center', justifyContent: 'center' },
  logBtnText: { color: 'white', fontSize: moderateScale(12), fontWeight: '900' },
  bgIcon: { position: 'absolute', right: -20, top: -20, zIndex: -1 },

  insightCard: { backgroundColor: '#111', borderRadius: moderateScale(20), padding: moderateScale(20) },
  insightRow: { flexDirection: 'row', gap: 16, marginBottom: 20 },
  insightIconContainer: { width: moderateScale(44), height: moderateScale(44), backgroundColor: '#1A1C00', borderRadius: moderateScale(12), alignItems: 'center', justifyContent: 'center' },
  insightTextContainer: { flex: 1 },
  insightTitle: { color: 'white', fontSize: moderateScale(15), fontWeight: 'bold', marginBottom: 4 },
  insightDesc: { color: '#888', fontSize: moderateScale(12), lineHeight: 18 },
  buttonRow: { flexDirection: 'row', gap: 12 },
  secondaryBtn: { flex: 1, height: moderateScale(40), backgroundColor: '#1A1A1A', borderRadius: moderateScale(10), alignItems: 'center', justifyContent: 'center' },
  secondaryBtnText: { color: 'white', fontSize: moderateScale(11), fontWeight: '900' }
});

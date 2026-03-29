import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../constants/theme';

interface AISuggestionCardProps {
  title: string;
  body: string;
  onHydrate?: () => void;
  onClose?: () => void;
}

export const AISuggestionCard: React.FC<AISuggestionCardProps> = ({ title, body, onHydrate, onClose }) => {
  return (
    <View style={styles.aiCard}>
      <View style={styles.aiContentRow}>
        <View style={styles.sparkleIcon}>
          <Ionicons name="sparkles" size={24} color={COLORS.primary} />
        </View>
        <View style={styles.aiTextContainer}>
          <Text style={styles.aiTitle}>{title}</Text>
          <Text style={styles.aiBody}>{body}</Text>
        </View>
      </View>
      <View style={styles.aiActionRow}>
         <TouchableOpacity style={styles.hydrateBtn} onPress={onHydrate}>
           <Text style={styles.hydrateBtnText}>Hydrate with AForce</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
           <Ionicons name="close" size={24} color={COLORS.text} />
         </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aiCard: { 
    backgroundColor: COLORS.card, 
    borderRadius: moderateScale(20), 
    padding: moderateScale(20),
    borderWidth: 1,
    borderColor: '#2B3300',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: moderateScale(20),
  },
  aiContentRow: { flexDirection: 'row', gap: moderateScale(16), marginBottom: moderateScale(20) },
  sparkleIcon: { width: moderateScale(48), height: moderateScale(80), backgroundColor: '#2B3300', borderRadius: moderateScale(24), alignItems: 'center', justifyContent: 'center' },
  aiTextContainer: { flex: 1 },
  aiTitle: { color: COLORS.text, fontSize: moderateScale(18), fontWeight: 'bold', marginBottom: moderateScale(8) },
  aiBody: { color: COLORS.textDim, fontSize: moderateScale(14), lineHeight: 20 },
  aiActionRow: { flexDirection: 'row', gap: moderateScale(12), alignItems: 'center' },
  hydrateBtn: { flex: 1, backgroundColor: COLORS.primary, paddingVertical: moderateScale(14), borderRadius: moderateScale(12), alignItems: 'center' },
  hydrateBtnText: { color: COLORS.background, fontSize: moderateScale(15), fontWeight: 'bold' },
  closeBtn: { width: moderateScale(50), height: moderateScale(50), borderRadius: moderateScale(12), backgroundColor: '#1A1A1A', alignItems: 'center', justifyContent: 'center' },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../constants/theme';

interface NotificationItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  iconBg: string;
  iconColor: string;
  title: string;
  time: string;
  body: string;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ icon, iconBg, iconColor, title, time, body }) => {
  return (
    <View style={styles.notifItem}>
      <View style={[styles.notifIconCircle, { backgroundColor: iconBg }]}>
        <Ionicons name={icon} size={20} color={iconColor} />
      </View>
      <View style={styles.notifMainContent}>
        <View style={styles.notifHeaderRow}>
          <Text style={styles.notifTitle}>{title}</Text>
          <Text style={styles.notifTime}>{time}</Text>
        </View>
        <Text style={styles.notifBody}>{body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notifItem: { 
    flexDirection: 'row', 
    backgroundColor: COLORS.card, 
    borderRadius: moderateScale(16), 
    padding: moderateScale(16),
  },
  notifIconCircle: { width: moderateScale(44), height: moderateScale(44), borderRadius: moderateScale(22), alignItems: 'center', justifyContent: 'center', marginRight: moderateScale(16) },
  notifMainContent: { flex: 1 },
  notifHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: moderateScale(4) },
  notifTitle: { color: COLORS.text, fontSize: moderateScale(15), fontWeight: 'bold' },
  notifTime: { color: COLORS.textDim, fontSize: moderateScale(12) },
  notifBody: { color: '#AAA', fontSize: moderateScale(13), lineHeight: 18 },
});

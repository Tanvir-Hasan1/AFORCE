import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../constants/theme';

export const TimeRangeSelector = () => {
  const [activeTab, setActiveTab] = useState('Daily');
  const tabs = ['Daily', 'Weekly', 'Monthly'];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => setActiveTab(tab)}
          style={[
            styles.tab,
            activeTab === tab && styles.activeTab
          ]}
        >
          <Text style={[
            styles.tabText,
            activeTab === tab && styles.activeTabText
          ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    backgroundColor: '#111', 
    borderRadius: moderateScale(12), 
    padding: 4,
    marginHorizontal: moderateScale(20),
    marginBottom: moderateScale(24),
  },
  tab: { 
    flex: 1, 
    height: moderateScale(36), 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: moderateScale(8) 
  },
  activeTab: { backgroundColor: COLORS.primary },
  tabText: { color: COLORS.textDim, fontSize: moderateScale(13), fontWeight: 'bold' },
  activeTabText: { color: 'black' },
});

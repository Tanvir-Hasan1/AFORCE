import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../constants/theme';
import { CustomHeader } from '../../components/ui/CustomHeader';
import { IntakeScoreCard } from '../../components/tabs/home/hydration-control-center/hydration-control/IntakeScoreCard';
import { QuickEntryGrid } from '../../components/tabs/home/hydration-control-center/hydration-control/QuickEntryGrid';
import { HydrationCheckSection } from '../../components/tabs/home/hydration-control-center/hydration-control/HydrationCheckSection';

export default function TrackScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader title="Hydration Control Center" />
      <ScrollView 
        contentContainerStyle={styles.content} 
        showsVerticalScrollIndicator={false}
      >
        <IntakeScoreCard />
        <QuickEntryGrid />
        <HydrationCheckSection />
      </ScrollView>
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
    paddingBottom: moderateScale(40),
  },
});

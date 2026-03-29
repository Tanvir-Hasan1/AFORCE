import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../../constants/theme';
import { TimeRangeSelector } from '../../components/tabs/insights/TimeRangeSelector';
import { HydrationScoreCard } from '../../components/tabs/insights/HydrationScoreCard';
import { StreakCard } from '../../components/tabs/insights/StreakCard';
import { HydrationTrendChart } from '../../components/tabs/insights/HydrationTrendChart';
import { HealthMetricsGrid } from '../../components/tabs/insights/HealthMetricsGrid';
import { AForceIntelligence } from '../../components/tabs/insights/AForceIntelligence';

export default function InsightsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <TimeRangeSelector />
        <HydrationScoreCard />
        <StreakCard />
        <HydrationTrendChart />
        <HealthMetricsGrid />
        <AForceIntelligence />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { paddingTop: 20, paddingBottom: 10 },
});

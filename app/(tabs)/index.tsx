import { moderateScale } from 'react-native-size-matters';
import { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { COLORS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { MainProgressRing } from '../../components/tabs/home/MainProgressRing';
import { StreakCard } from '../../components/tabs/home/StreakCard';
import { SuggestionCard } from '../../components/tabs/home/SuggestionCard';
import { QuickLog } from '../../components/tabs/home/QuickLog';
import { HydrationControlCard } from '../../components/tabs/home/HydrationControlCard';
import { DailyGoalBar } from '../../components/tabs/home/DailyGoalBar';
import { MetricTile } from '../../components/tabs/home/MetricTile';

export default function HomeScreen() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toValue = isOpen ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();
    setIsOpen(!isOpen);
  };

  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg']
  });

  const btn1Style = {
    transform: [
      { scale: animation },
      { translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [0, -80] }) }
    ]
  };

  const btn2Style = {
    transform: [
      { scale: animation },
      { translateX: animation.interpolate({ inputRange: [0, 1], outputRange: [0, -80] }) }
    ]
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greetingText}>Good morning,</Text>
            <Text style={styles.nameText}>Alex</Text>
          </View>
          <TouchableOpacity style={styles.bellBtn} onPress={() => router.push('/notifications')}>
            <Ionicons name="notifications-outline" size={20} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        {/* Dashboard Widgets */}
        <TouchableOpacity 
          activeOpacity={0.9} 
          onPress={() => router.push('/couching/hydration-plan')}
        >
          <MainProgressRing />
        </TouchableOpacity>
        
        <StreakCard />
        
        <SuggestionCard />
        
        <QuickLog />
        
        <HydrationControlCard />
        
        <DailyGoalBar />

        {/* 2x2 Metric Grid */}
        <View style={styles.gridRow}>
          <MetricTile title="STEPS" value="8,432" unit="/ 10k" type="progress" progress={84} />
          <View style={{width: 16}} />
          <MetricTile title="WORKOUT" value="45" unit="mins" type="progress" progress={60} />
        </View>
        <View style={styles.gridRow}>
          <MetricTile title="AMB. TEMP" value="24°F" type="text" bottomText="High Humidity" bottomTextColor="#FFCC00" />
          <View style={{width: 16}} />
          <MetricTile title="HEART RATE" value="72" unit="bpm" type="dot-text" bottomText="Resting" dotColor="#00FF66" />
        </View>

      </ScrollView>

      {/* Radial Speed Dial Menu */}
      <View style={styles.fabContainer}>
        {/* NFC Button (Pops Left) */}
        <Animated.View style={[styles.subFab, btn2Style] as any}>
          <TouchableOpacity 
            onPress={() => {
              toggleMenu();
              router.push('/fab/nfc' as any);
            }} 
            style={styles.subFabCircle}
          >
            <Ionicons name="radio-outline" size={24} color={COLORS.background} />
          </TouchableOpacity>
        </Animated.View>

        {/* Barcode Button (Pops Up) */}
        <Animated.View style={[styles.subFab, btn1Style] as any}>
          <TouchableOpacity 
            onPress={() => {
              toggleMenu();
              router.push('/fab/barcode' as any);
            }} 
            style={styles.subFabCircle}
          >
            <Ionicons name="barcode-outline" size={24} color={COLORS.background} />
          </TouchableOpacity>
        </Animated.View>

        {/* Main FAB anchor */}
        <TouchableOpacity style={styles.fab} onPress={toggleMenu} activeOpacity={0.8}>
          <Animated.View style={{ transform: [{ rotate: rotation }] }}>
            <Ionicons name="add" size={32} color={COLORS.background} />
          </Animated.View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: moderateScale(20), paddingBottom: moderateScale(100) },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: moderateScale(10) },
  greetingText: { color: COLORS.textDim, fontSize: moderateScale(13), fontWeight: '600' },
  nameText: { color: COLORS.text, fontSize: moderateScale(24), fontWeight: 'bold' },
  bellBtn: { width: moderateScale(44), height: moderateScale(44), borderRadius: moderateScale(22), backgroundColor: COLORS.card, alignItems: 'center', justifyContent: 'center' },
  gridRow: { flexDirection: 'row', justifyContent: 'space-between' },
  fabContainer: { position: 'absolute', bottom: moderateScale(20), right: moderateScale(20), alignItems: 'center', justifyContent: 'center' },
  fab: { width: moderateScale(64), height: moderateScale(64), borderRadius: moderateScale(32), backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', shadowColor: COLORS.primary, shadowOffset: { width: moderateScale(0), height: moderateScale(4) }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8, zIndex: 10 },
  subFab: { position: 'absolute', width: moderateScale(48), height: moderateScale(48), zIndex: 9 },
  subFabCircle: { width: moderateScale(48), height: moderateScale(48), borderRadius: moderateScale(24), backgroundColor: COLORS.primaryPress, alignItems: 'center', justifyContent: 'center', shadowColor: COLORS.primaryPress, shadowOffset: { width: moderateScale(0), height: moderateScale(2) }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 5 }
});

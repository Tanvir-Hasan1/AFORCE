import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../../constants/theme';
import { useRouter } from 'expo-router';

interface RecommendedCardProps {
  title: string;
  coach: string;
  duration: string;
  image: string;
  category: string;
  isFavorite?: boolean;
}

export const RecommendedCard: React.FC<RecommendedCardProps> = ({ title, coach, duration, image, category, isFavorite }) => {
  const router = useRouter();

  return (
    <TouchableOpacity 
        style={styles.card} 
        activeOpacity={0.9}
        onPress={() => router.push('/couching')}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.playOverlay}>
          <Ionicons name="play" size={12} color="white" />
        </View>
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.categoryText}>{category}</Text>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.coachText}>Coach: {coach}</Text>
        <Text style={styles.durationText}>{duration}</Text>
      </View>
      
      <TouchableOpacity style={styles.favoriteBtn}>
        <Ionicons 
            name={isFavorite ? "star" : "star-outline"} 
            size={20} 
            color={isFavorite ? COLORS.primary : "#444"} 
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { 
    flexDirection: 'row', 
    backgroundColor: COLORS.card, 
    borderRadius: moderateScale(16), 
    padding: moderateScale(12),
    marginBottom: moderateScale(16),
    borderWidth: 1,
    borderColor: '#111',
  },
  imageContainer: { width: moderateScale(100), height: moderateScale(100), borderRadius: moderateScale(12), overflow: 'hidden' },
  image: { width: '100%', height: '100%' },
  playOverlay: { position: 'absolute', top: '50%', left: '50%', marginLeft: -12, marginTop: -12, width: 24, height: 24, borderRadius: 12, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' },
  textContainer: { flex: 1, marginLeft: moderateScale(16), justifyContent: 'center' },
  categoryText: { color: COLORS.primary, fontSize: moderateScale(10), fontWeight: '900', letterSpacing: 0.5, marginBottom: 4, textTransform: 'uppercase' },
  titleText: { color: 'white', fontSize: moderateScale(15), fontWeight: 'bold', marginBottom: 4 },
  coachText: { color: '#888', fontSize: moderateScale(12), marginBottom: 2 },
  durationText: { color: '#555', fontSize: moderateScale(10), fontWeight: 'bold' },
  favoriteBtn: { padding: 4, justifyContent: 'center' },
});

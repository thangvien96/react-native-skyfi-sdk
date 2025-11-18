import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

// const { width } = Dimensions.get('window');

const Banner: React.FC = () => {
  const handleBannerPress = () => {
    console.log('Banner pressed');
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleBannerPress}
      activeOpacity={0.9}
    >
      <Image
        source={{ uri: 'https://www.skyfi.vn/assets/hero/hero2.png' }}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
});

export default Banner;
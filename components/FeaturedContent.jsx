import React, { useEffect, useState, useRef } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "@/constants/theme";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";

const FeaturedContent = () => {
  const screenWidth = Dimensions.get("window").width;
  const [featuredData, setFeaturedData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    const fetchFeaturedData = async () => {
      const { data: FeaturedContent, error } = await supabase
        .from("FeaturedContent")
        .select("*");

      if (error) {
        setFeaturedData([]);
        console.log("Error in fetching featured data");
      } else {
        setFeaturedData(FeaturedContent);
      }
    };
    fetchFeaturedData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % featuredData.length;
      scrollToNext(nextIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [featuredData, activeIndex]);

  const handleScroll = (event) => {
    const index = Math.floor(
      event.nativeEvent.contentOffset.x / (screenWidth - 40)
    );
    setActiveIndex(index);
  };

  const scrollToNext = (index) => {
    scrollRef.current.scrollToIndex({ index });
    setActiveIndex(index);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/details",
          params: { id: item.id, image: item.images },
        })
      }
    >
      <Image
        source={{ uri: item.images }}
        style={[styles.featuredImage, { width: screenWidth - 40 }]}
      />
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        ref={scrollRef}
        data={featuredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={styles.featuredContainer}
      />
      
      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        {featuredData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  activeIndex === index
                    ? theme.colors.primaryDark
                    : theme.colors.primaryLight,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default FeaturedContent;

const styles = StyleSheet.create({
  featuredContainer: {
    marginBottom: 10,
  },
  featuredImage: {
    height: 180,
    borderRadius: 10,
    marginHorizontal: 10,
    resizeMode: "cover",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ChannelItem from '../components/channelListItem';
import useIpptvData from '../helpers/getIptvDataHook';

export default function HomePage() {

    const data = useIpptvData(2000)

    return (
        <SafeAreaView>
            <View styles={styles.container}>
                <View style={{ height: 10 }} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <ChannelItem image={item.tvg.logo} name={item.name} playlist={item.url} />
                        )
                    }}
                    keyExtractor={item => item.rnId}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f6',
    }
});

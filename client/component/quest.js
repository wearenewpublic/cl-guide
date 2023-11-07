import { StyleSheet, Text, View } from "react-native";
import { Button, Card, Pad, PadBox } from "./basics";
import { pushSubscreen } from "../util/navigate";

export function QuestPreview({quest, onSelect, selected}) {
    const s = QuestPreviewStyle;
 
    function onShowHow() {
        console.log('onShowHow');
        pushSubscreen('steps', {questKey: quest.key})
    }

    return (
        // <View style={s.quest}>
        <Card onPress={onSelect}>
            <Text style={s.title}>{quest.title}</Text>
            {selected && <Pad size={4} />}
            <Text numberOfLines={selected ? null : 1} style={s.description}>
                {quest.description.trim()}
            </Text>

            {selected && <PadBox top={12}><Button onPress={onShowHow} label='Show me How' /></PadBox>}
        </Card>
        // </View>
    );
}
const QuestPreviewStyle = StyleSheet.create({
    quest: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        // boxShadow: '0 0 6px #ddd',
        shadowRadius: 1, shadowColor: '#555', shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5, elevation: 1,
    },
    hover: {
        shadowRadius: 2, shadowColor: '#555', shadowOffset: {width: 0, height: 2}
    },
    title: {
        fontWeight: 'bold'
    },
    description: {
        color: '#666'
    },
});


function QuestSteps({quest}) {
        
}
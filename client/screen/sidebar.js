import { StyleSheet, Text, View } from "react-native";
import { simpleLocalGroupQuests } from "../quests/local-group";
import { QuestPreview } from "../component/quest";
import { Card, PadBox } from "../component/basics";
import { useState } from "react";

export function SidebarScreen() {
    const quests = simpleLocalGroupQuests;
    console.log('SidebarScreen', {quests});
    const [selected, setSelected] = useState(null);
    return (
        <View style={{width: 380}}>
            <LevelIndicator level={1} groupType='Local Group' />
            {quests.map(quest => 
                <PadBox key={quest.key} horiz={8} vert={4}>
                    <QuestPreview quest={quest} 
                        onSelect={() => setSelected(quest.key)}
                        selected={selected==quest.key} />
                </PadBox>)}
        </View>
    );
}

function LevelIndicator({level, groupType}) {
    const s = LevelIndicatorStyle;
    return <View style={s.outer}>
        <Text style={s.level}>Level {level}</Text>
        <Text style={s.groupType}>{groupType}</Text>
    </View>
}

const LevelIndicatorStyle = StyleSheet.create({
    level: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
    },
    groupType: {
        fontSize: 14,
        color: '#666',
    },
    outer: {
        paddingLeft: 10,
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})

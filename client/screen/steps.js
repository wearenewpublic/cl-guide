import { StyleSheet, Text, View } from "react-native";
import { quests } from "../quests";
import { CheckBox, Pad } from "../component/basics";
import { useState } from "react";

export function StepsTitle({questKey}) {
    const quest = quests[questKey]
    return <Text>{quest.title}</Text>
}

export function StepsScreen({questKey}) {
    const quest = quests[questKey]
    console.log('StepsScreen', {quest});
    return <View>
        <Text>{quest.description}</Text>
        <Pad />
        {quest.steps.map((step, idx) => <Step key={idx} step={step} />)}        
    </View>
}

function Step({step}) {
    const s = StepStyle;
    const [checked, setChecked] = useState(false); 
    return <View style={s.step}>
        <CheckBox checked={checked} onChange={setChecked} />
        <View style={s.right}>
            <Text style={s.title}>{step.title}</Text>
            <Text style={s.details}>{step.details}</Text>        
        </View>
    </View>
}

const StepStyle = StyleSheet.create({
    step: {
        maxWidth: 400,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    right: {
        marginLeft: 4,
        flex: 1
    },
    title: {
        fontWeight: 'bold',
    },
    details: {
        color: '#666',
    }
})


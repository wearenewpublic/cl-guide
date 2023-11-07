import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Pad({size=8}) {
    return <View style={{height: size, width: size}}/>
}

export function PadBox({children, vert, horiz, top, bottom}) {
    return (
        <View style={{paddingVertical: vert, paddingHorizontal: horiz, paddingTop: top, paddingBottom: bottom}}>
            {children}
        </View>
    );
}

export function Clickable({onPress, onHoverChange, children, style, hoverStyle=null}) {
    const [hover, setHover] = useState(false);
    function onPressInner() {
        if (onPress) {
            // closeActivePopup();
            onPress();
        }
    }
    function onHover(hover) {
        setHover(hover);
        onHoverChange && onHoverChange(hover);
    }
    return <TouchableOpacity onPress={onPressInner} 
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            style={hover ? [style, hoverStyle] : style} pointerEvents="box-none">
        {children}
    </TouchableOpacity>
}



export function MaybeClickable({onPress, children, style, hoverStyle, onHoverChange, isClickable}) {
    if (!isClickable) {
        return <View style={style}>{children}</View>
    } else {
        return <Clickable onPress={onPress} style={style} 
            hoverStyle={hoverStyle} 
            onHoverChange={onHoverChange}>
               {children}
        </Clickable>
    }
}


export function Card({children, onPress, fitted=false, pad=10}) {
    const s = CardStyle;

    return <MaybeClickable onPress={onPress} isClickable={onPress}
        style={[s.card, fitted ? {alignSelf: 'flex-start'} : null, {padding: pad}]} 
        hoverStyle={s.hover} >
            {children}
    </MaybeClickable>
}


const CardStyle = StyleSheet.create({
    card: {
        borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10,
        shadowRadius: 1, shadowColor: '#555', shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5, elevation: 1,
        backgroundColor: '#fff'
    },
    hover: {
        shadowRadius: 2, shadowColor: '#555', shadowOffset: {width: 0, height: 2}
    }
})

export function Button({children, label, onPress}) {
    const s = ButtonStyle;
    return <Clickable onPress={onPress} style={s.button} hoverStyle={s.hover}>
        <Text style={s.label}>{label}</Text>
    </Clickable>
}

const ButtonStyle = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        alignSelf: 'flex-start',
        borderWidth: 1,
        backgroundColor: 'black',
        color: 'white'
    },
    hover: {
        backgroundColor: '#444'
    },
    label: {
        color: 'white'
    }
})

export function CheckBox({checked, onChange}) {
    return <input type='checkbox' checked={checked} onChange={() => onChange(!checked)} style={{cursor: 'pointer'}} />
}

import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useLiveUrl } from './util/liveurl';
import { screens } from './screen';
import { BrowserScreen } from './screen/browser';
import React from 'react';
import { getScreenStackForUrl, goBack } from './util/navigate';
import { Clickable } from './component/basics';

export default function App() {
  const url = useLiveUrl();
  const screenStack = getScreenStackForUrl(url);
  console.log('screenStack', screenStack);
  const {screenKey, path} = parseUrl(url);

  console.log('App', {screenKey, path})

  return <ScreenStack screenStack={screenStack} />

  // const screen = getScreen(screenKey);
  // return React.createElement(screen.component, {path});
}

function ScreenStack({screenStack}) {
  const s = ScreenStackStyle;
  return <View style={s.outer}>
    {screenStack.map(({screenKey, params}, index) => 
      <StackedScreen key={index} index={index} screenKey={screenKey} params={params} />)}
  </View>
}

const ScreenStackStyle = StyleSheet.create({
  outer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
})

function StackedScreen({index, screenKey, params}) {
  const s = StackedScreenStyle;
  const screen = getScreen(screenKey);
  return <View style={[s.screen, {zIndex: index}]}>
    {index > 0 && <TitleBar screen={screen} params={params} />}
    {React.createElement(screen.component, params)}
  </View>
}

const StackedScreenStyle = StyleSheet.create({
  screen: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  }
})

function TitleBar({screen, params}) {
  const s = TitleBarStyle;
  return <View style={s.outer}> 
    <Clickable onPress={goBack} hoverStyle={s.iconHover}>
      <View style={s.iconPad}>
        <Image source={{uri: 'https://cl-guide.web.app/icon/chevron_left.png'}} style={s.backIcon} />
      </View>
    </Clickable>
    <Text style={s.title}>
      {React.createElement(screen.title, params)}
    </Text>
  </View>
}

const TitleBarStyle = StyleSheet.create({
  outer: {
    borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 8,
    height: 14,    // paddingHorizontal: 8
  },
  iconPad: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 4
  },
  iconHover: {
    backgroundColor: '#eee',
    borderRadius: 8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  }
})


function parseUrl(url) {
  const parsedUrl = new URL(url);
  const parts = parsedUrl.pathname.split('/').filter(x => x);
  return {screenKey: parts[0], part: parts.slice(1)}
}

function getScreen(screenKey) {
  if (screens[screenKey]) {
    return screens[screenKey];
  } else {
    return screens.browser;
  }
}

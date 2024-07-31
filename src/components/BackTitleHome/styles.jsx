import { ColorSheet } from '@/utils/ColorSheet';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    marginTop: Platform.OS == 'android' ? hp(4) : hp(8),
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    paddingLeft: hp(1),
  },
  title: {
    fontSize: RFValue(15),
    fontWeight: '700',
    color: ColorSheet.White,
    textAlign: 'center',
  },
  addIcon: {
    position: 'absolute',
    right: 0,
    paddingRight: hp(1),
  },
  roundContainer: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorSheet.PrimaryButtonTxt,
  },
});
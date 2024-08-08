import { Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ColorSheet } from '@/utils/ColorSheet';

export const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
  },
  mainView: {
    width: '93%',
    height: hp(7),
    paddingLeft: hp(1),
    marginTop: hp(3),
    flexDirection: 'row',
    backgroundColor: ColorSheet.TextInputFieldColor,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: ColorSheet.ActiveInputBorder,
  },
  titleInputContainer: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'green'
  },
  titleName: {
    fontSize: RFValue(14),
    color: ColorSheet.Text41,
  },
  textInput: {
    fontSize: RFValue(14),
    color: ColorSheet.Text0,
    paddingVertical: Platform.OS == 'android' ? 0 : wp(1),
    fontWeight: '500',
  },
  placeholderTxt: {
    color: ColorSheet.PlaceholderText,
  },
  editIcon: {
    marginRight: wp(2),
  },
});

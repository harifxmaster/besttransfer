import { ColorSheet } from '@/utils/ColorSheet';
import { Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ColorSheet.backGroundColor,
  },
  scrollViewStyle: {
    flexGrow: 1,
    paddingBottom: hp(5),
  },
  main_view_Container: {
    // width: '100%',
    margin: hp(2),
    marginTop: Platform.OS == 'android' ? hp(4) : hp(2),
    alignSelf: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'pink',
  },
  logo_image: {
    marginTop: Platform.OS == 'android' ? hp(3) : 0,
    alignSelf: 'center',
    borderRadius: 100,
    resizeMode: 'stretch',
    width: wp(28),
    height: wp(28),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 10, // Ensures shadow effect on Android
  },
  backProgress_row: {
    // flexDirection: 'row',
  },
  progressBarContainer: {
    width: wp(85),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1),
    // backgroundColor: 'red',
  },
  backIcon: {
    marginRight: hp(1),
    position: 'absolute',
    left: 0,
  },
  subTitleContainer: {
    marginTop: hp(0.5),
    alignItems: 'center',
    // justifyContent: 'center',
  },
  subTitleTxtStyle: {
    fontSize: RFValue(14),
    lineHeight: hp(3),
    fontWeight: '600',
    color: ColorSheet.Primary,
  },
  dropDownStyle: {
    width: wp(90),
    marginTop: hp(1.5),
  },
  selectImgContainer: {
    width: wp(90),
    height: Platform.OS == 'android' ? hp(19) : hp(19),
    marginTop: hp(2.5),
    // marginBottom: hp(4),
    padding: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderRadius: hp(1),
    backgroundColor: ColorSheet.UploadViewColor,
    borderWidth: 0.5,
  },
  selectBorder_Close_Container: {
    width: wp(36),
    height: hp(13),
    borderRadius: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: ColorSheet.PrimaryButton,
    borderWidth: 0.5,
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: -1,
    // backgroundColor: ColorSheet.Error,
  },
  imgStyle: {
    width: wp(30),
    height: hp(8),
    resizeMode: 'contain',
  },
  we_donot_accpet: {
    marginTop: hp(2),
  },
  acceptTxt: {
    paddingBottom: hp(1),
    fontSize: RFValue(13),
    fontWeight: '600',
    color: ColorSheet.Primary,
  },
  clickToUpload: {
    paddingTop: hp(1),
    fontSize: RFValue(13),
    fontWeight: '600',
    color: ColorSheet.UrlTextColor,
  },
  jpg_pdf_txt: {
    paddingTop: hp(1),
    fontSize: RFValue(13),
    fontWeight: '600',
    color: ColorSheet.ImageJPG,
  },
  buttonImgContainer: {
    position: 'absolute',
    bottom: 0,
    width: wp(100),
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: 'red',
    // paddingBottom: hp(0.5), // Padding for space at the bottom
    backgroundColor: ColorSheet.Secondary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.4,

    elevation: 2,
  },
  buttonStyle: {
    width: wp(90),
    marginTop: hp(2),
  },
  imageStyle: {
    width: wp(50),
    height: hp(6),
    resizeMode: 'contain',
    marginTop: hp(1),
    // backgroundColor: 'green'
  },
});

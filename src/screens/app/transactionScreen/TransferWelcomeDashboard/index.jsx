import {
  ActivityIndicator,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import TransferWelcomeDashboardComponent from '@/components/transaction/transferWelcomeDashboard';
import { Constants } from './constants';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import TransferSaving from '@/components/transaction/transferSaving';
import Rotate from '@/assets/svg/transaction/Rotate.svg';
import TransferRecieving from '@/components/transaction/transferReceiving';

const TransferWelcomeDashboard = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      {/* Status Bar */}
      <StatusBar
        barStyle='light-content'
        backgroundColor={ColorSheet.PrimaryButton}
        translucent={false}
      />

      {/* Image */}
      <Image
        style={styles.backgroundImage}
        source={require('@/assets/images/Transaction/BestWelcomeDashboard.png')}
      />

      {/* Welcome, Name And LogOut */}
      <TransferWelcomeDashboardComponent
        imageSource={require('@/assets/images/Transaction/WelcomeProfilePic.png')}
        title={Constants.WELCOME_BACK}
        name={'Arianna'}
        onPress={() => {
          console.log('logOut');
        }}
      />

      {/* mainContainer */}
      <View style={styles.mainContainer}>
        {/* ExChange Rate */}
        <View style={styles.exchangeContainer}>
          <Text style={styles.exchangeText}>
            {' '}
            {Constants.EXCHANGE_RATE}:<Text style={styles.exchangeAmount}> £{'1=107.34 INR'} </Text>
          </Text>
        </View>

        {/* Tranfer Detalis */}
        <View style={styles.savingRecievingContainer}>
          {/* saving */}
          <TransferSaving
            saveTitle={Constants.SAVING_ACC}
            saveAmount={'1000'}
            saveCountry={'GBP'}
            saveImageSource={require('@/assets/images/Transaction/CountryUk.png')}
          />

          {/* Horizontal And SVG Rotate */}
          <View style={styles.horizontalContainer}>
            <View style={styles.horizontalLine} />
            <View style={styles.rotateContainer}>
              <Rotate width={20} height={18} />
            </View>
          </View>

          {/* recieving */}
          <TransferRecieving
            recieveTitle={Constants.RECIEVING_AMOUNT}
            recieveAmount={'1714'}
            recieveCountry={'INR'}
            recieveImageSource={require('@/assets/images/Transaction/countryIndia.png')}
          />
        </View>

        <View style={styles.feesTotalPaymentContainer}>
          {/* Fees */}
          <View style={styles.rowContainer}>
            <Text style={styles.text01}> {Constants.FEE} </Text>
            <Text style={styles.textAmount}> £{'0.00'} </Text>
          </View>

          {/* TotalPayment */}
          <View style={styles.rowContainer}>
            <Text style={styles.text01}> {Constants.TOTAL_PAYMENT} </Text>
            <Text style={styles.textAmount}> £{'1000'} </Text>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.btnContainer}
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('TransactionListScreen');
          }}
        >
          {/* Icon */}
          <FontAwesome name='send' size={20} color={ColorSheet.PrimaryButtonTxt} />

          {/* Button Text */}
          <Text style={styles.buttonText}> {Constants.SEND} </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TransferWelcomeDashboard;

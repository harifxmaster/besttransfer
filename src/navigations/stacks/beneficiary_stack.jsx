import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SelectBeneficiary from '@/screens/app/ beneficiary/SelectBeneficiary';
import SearchBeneficiary from '@/screens/app/ beneficiary/SeacrchBeneficiary';
import Preview from '@/screens/app/preview';
import AddBeneficiary from '@/screens/app/beneficiary/AddBeneficiary';
import BeneficiaryOtpVerification from '@/screens/global/OtpVerification/benificiary';
import AddUPIBeneficiary from '@/screens/app/beneficiary/AddBeneficiary/upi';

const Stack = createStackNavigator();

const BeneficiaryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='SearchBeneficiaryScreen'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='SearchBeneficiaryScreen' component={SearchBeneficiary} />
      <Stack.Screen name='SelectBeneficiaryScreen' component={SelectBeneficiary} />
      <Stack.Screen name='PreviewScreen' component={Preview} />
      <Stack.Screen name='AddBeneficiary' component={AddBeneficiary} />
      <Stack.Screen name='AddUPIBeneficiary' component={AddUPIBeneficiary} />
      <Stack.Screen name='BeneficiaryOtpVerification' component={BeneficiaryOtpVerification} />
    </Stack.Navigator>
  );
};

export default BeneficiaryStack;

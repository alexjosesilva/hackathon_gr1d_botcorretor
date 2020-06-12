import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';

import styles from './styles';



export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const client = route.params.client;
  const message = `Olá,${client.name}, estou entrando em contato pois gostaria de ajudar na escolha do melhor produto para você `;

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Olá tudo bem, estou analisando seu caso:${client.description}`,
      recipients: [client.email],
      body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${client.phone}&text=${message}`);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} />

          <TouchableOpacity onPress={navigateBack}>
            <Feather name="arrow-left" size={28} color="#03989eff" />
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
          <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NOME:</Text>
          <Text style={styles.incidentValue}>{client.name}</Text>

          <Text style={styles.incidentProperty}>Identidade:</Text>
          <Text style={styles.incidentValue}>{client.identity}</Text>

          <Text style={styles.incidentProperty}>Descrição do Serviço:</Text>
          <Text style={styles.incidentValue}>{client.description}</Text>

          <Text style={styles.incidentProperty}>Valor do contrato</Text>
          <Text style={styles.incidentValue}>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(client.value)}
          </Text>
        </View>


        <View style={styles.contactBox}>

          <Text style={styles.heroDescription}>Entre em contato</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
              <Text style={styles.actionText}>WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress={sendMail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
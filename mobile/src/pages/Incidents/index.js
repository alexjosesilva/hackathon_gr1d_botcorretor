import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
  const [clients, setClients] = useState([]);
  const navigation = useNavigation();

  function navigateToDetail(client) {
    navigation.navigate('Detail', { client });
  }

  async function loadIncidents() {
    const response = await api.get('client');

    setClients(response.data.client);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Logo abaixo segue a lista de clientes</Text>


      <FlatList
        data={clients}
        style={styles.incidentList}
        keyExtractor={incident => String(incident._id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: client }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>NOME:</Text>
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

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(client)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#03989eff" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

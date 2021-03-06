import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

function TeacherList() {

    const [ isFiltersVisible, setIsFiltersVisible ] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    function handleToggleFilter() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleSubmit() {
        
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data);
    }  

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFilter}>
                        <Feather 
                            name="filter"
                            size={25}
                            color="#fff"
                        />
                    </BorderlessButton>
                )}
            >
                {
                    isFiltersVisible && (
                        <View style={styles.searchForm}>
                            <Text style={styles.label}>Matéria</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Qual a matéria?"
                                placeholderTextColor="#c1bccc"
                                value={subject}
                                onChangeText={text => setSubject(text)}
                            />
        
                            <View style={styles.inputGroup}>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Dia da semana</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Qual é o dia?"
                                        placeholderTextColor="#c1bccc"
                                        value={week_day}
                                        onChangeText={text => setWeekDay(text)}
                                    />
                                </View>
        
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Horário</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Qual horário?"
                                        placeholderTextColor="#c1bccc"
                                        value={time}
                                        onChangeText={text => setTime(text)}
                                    />
                                </View>
                            </View>

                            <RectButton 
                                style={styles.submitButton}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.submitButtonText}>Filtrar</Text>
                            </RectButton>
                        </View>
                    )
                }
               
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 24,
                }}
            >
                {
                    teachers.map(teacher => <TeacherItem/>)
                }
            </ScrollView>
        </View>
    )
}

export default TeacherList;
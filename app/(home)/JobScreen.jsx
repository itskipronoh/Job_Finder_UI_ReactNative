import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const JobScreen = () => {
    return (
        <>
            <StatusBar translucent backgroundColor='transparent' />
            <View style={{
                flex: 1,
                backgroundColor: '#FFF'
            }}>
                <View>
                    <Image source={require('../../assets/office.png')}
                        style={{
                            width: '100%',
                            height: 200,
                            resizeMode: 'cover'
                        }} />
                    <Image source={require('../../assets/google_banner.png')}
                        style={{
                            position: 'absolute',
                            alignSelf: 'center',
                            bottom: -35,
                            width: 100,
                            height: 100,
                            resizeMode: 'contain'
                        }} />
                </View>

                <View style={{
                    marginTop: 40,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 24,
                        textAlign: 'center'
                    }}>Security Engineering Manager</Text>
                    <Text style={{
                        fontWeight: '300',
                        fontSize: 16,
                        textAlign: 'center'
                    }}>California, USA</Text>
                </View>

                <View style={{ padding: 16 }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: '600',
                        marginBottom: 16
                    }}>Requirements</Text>
                    <Text style={{ fontSize: 16, lineHeight: 24 }}>{`Bachelor's degree in Computer Science, a related technical field, or equivalent practical experience\n\nExperience managing a team of engineering or security operations professionals for an organization. \n\nExperience with threat modeling.`}</Text>
                </View>

                <View style={{ padding: 16 }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: '600',
                        marginBottom: 16
                    }}>Qualifications</Text>
                    <Text style={{ fontSize: 16, lineHeight: 24 }}>{`Experience growing and developing a team. \n\nExperience with automation and Security Analysis. \n\nExperience in technical program management.`}</Text>
                </View>

                <View style={{ padding: 16 }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: '600',
                        marginBottom: 16
                    }}>Skills Needed</Text>
                    <Text style={{ fontSize: 16, lineHeight: 24 }}>Design Thinking  •  Problem Solving</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    padding: 16,
                    justifyContent: 'space-between',
                    marginBottom: 16
                }}>
                    <TouchableOpacity style={{
                        flex: 1,
                        marginRight: 16,
                        backgroundColor: '#3F6CDF',
                        padding: 16,
                        borderRadius: 16,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: '#FFF',
                            fontSize: 16
                        }}>Apply Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: '#3F6CDF',
                        padding: 16,
                        borderRadius: 16,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Ionicons name='chatbox-ellipses-outline' size={24} color='#FFF' />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default JobScreen;

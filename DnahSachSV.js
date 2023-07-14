import { StyleSheet, Text, View, Image, Modal, Pressable, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { useState } from 'react'



const DATA = [{
    image: "https://tse3.mm.bing.net/th?id=OIP.mbUs2c1cJGIQ7cNexYPPEgHaEK&pid=Api&P=0&h=180",
    name: "Tran B Actually",
    address: "dfsd@gmail.com",
    numberphone: "023345454",
},
{
    image: "https://tse1.mm.bing.net/th?id=OIP.F4Yvkb540tL_ilsKP7m-cAHaGX&pid=Api&P=0&h=180",
    name: "Tran Ba Thu",
    address: "dfsd@gmail.com",
    numberphone: "023435435",
},

{
    image: "https://tse1.mm.bing.net/th?id=OIP.O_qpr9xECWNbX2JRftYLNQHaEK&pid=Api&P=0&h=180",
    name: "Tran Gia Ha",
    address: "dfsd@gmail.com",
    numberphone: "023345354",
},

{
    image: "https://tse3.mm.bing.net/th?id=OIP.kz3lh73cvWJz6xYH1EPAEgHaE8&pid=Api&P=0&h=180",
    name: "Xuan Ha",
    address: "dfsd@gmail.com",
    numberphone: "02334354354",
},
]




const DnahSachSV = () => {
    const [list, setData] = useState(
        DATA
    );
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleU, setModalVisibleU] = useState(false);
    const [name, setname] = useState('')
    const [address, setaddress] = useState('')
    const [numberphone, setnumberphone] = useState('')
    const [index, setindex] = useState(0);
    const deletelist = (id) => {
        const newlist = list.filter(item => item.numberphone != id)
        setData(newlist);
        setModalVisible(!modalVisible)

    }
    const updatelist = (id, newItem) => {
        newItem = {
            name: name,
            address: address,
            namePhone: namePhone,
        }
        const newlist = list.slice(item => item.numberphone != id)

        setData(newlist);
        setModalVisibleU(!modalVisibleU)
    }

    // setData(DATA);
    return (
        <View style={styles.container}>
            <Text style={{ marginTop: 20, fontSize: 30 }}>Danh Sach SV</Text>
            <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.FzMYDRxu1JywfeDWp8bVKwHaHa&pid=Api&P=0&h=180' }}></Image>
            <FlatList
                data={list}
                renderItem={({ item, index }) =>
                    <View style={styles.layoutitem}>
                        <Image style={styles.image} source={{ uri: item.image }}></Image>
                        <View>

                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.text}>{item.address}</Text>
                            <Text style={styles.text}>{item.numberphone}</Text>

                        </View>



                        <Pressable
                            onPress={
                                () => setModalVisible(true)
                            }

                        >
                            <Image style={styles.icon} source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.FzMYDRxu1JywfeDWp8bVKwHaHa&pid=Api&P=0&h=180' }}></Image>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                setModalVisibleU(!modalVisibleU)
                                setindex(index)
                            }
                            }
                        >
                            <Image style={styles.icon} source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.ADJh9Yqs_bkLz4o8-SZWnwHaHa&pid=Api&P=0&h=180' }}></Image>
                        </Pressable>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}

                        // onRequestClose={() => {
                        //   Alert.alert('Modal has been closed.');
                        //   setModalVisible(!modalVisible);
                        // }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Xos obj</Text>
                                    <View>
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => deletelist(item.numberphone)}>
                                            <Text style={styles.textStyle}>Xoa</Text>
                                        </Pressable>
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => deletelist(item.numberphone)}>
                                            <Text style={styles.textStyle}>Xoa</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Modal>

                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={modalVisibleU}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text>Update</Text>
                                    <TextInput onChangeText={text => onChangeText(text)} style={styles.input} placeholder='name' value={DATA[index].name}></TextInput>
                                    <TextInput onChangeText={text => onChangeText(text)} style={styles.input} placeholder='address' value={DATA[index].address}></TextInput>
                                    <TextInput onChangeText={text => onChangeText(text)} style={styles.input} placeholder='numberphone' value={DATA[index].numberphone}></TextInput>
                                    <View style={[styles.layoutitem, { borderBottomWidth: 0 }]}>
                                        <Pressable style={styles.button}>
                                            <Text style={styles.mdbtntext}>Update</Text>
                                        </Pressable>
                                        <Pressable style={styles.button} onPress={() => setModalVisibleU(!modalVisibleU)}>
                                            <Text style={styles.mdbtntext}>cancle</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                }
                keyExtractor={item => item.numberphone}></FlatList>


        </View>
    )
}

export default DnahSachSV

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',

    },
    layoutitem: {
        alignItems: 'center',
        borderBottomWidth: 1,
        marginBottom: 10,
        flexDirection: 'row',

    },
    image: {
        marginRight: 10,
        width: 100,
        height: 100,
    },
    icon: {
        margin: 10,
        width: 30,
        height: 30,
    }
    ,
    text: {
        fontSize: 20

    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: Dimensions.get('window').width - 100,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    input: {
        marginBottom: 20,
        borderColor: "gray",
        width: 200,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    button: {
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    mdbtntext: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})

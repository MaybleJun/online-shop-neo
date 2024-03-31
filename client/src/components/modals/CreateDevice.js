// import React, {useContext, useEffect, useState} from 'react';
// import Modal from "react-bootstrap/Modal";
// import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
// import {Context} from "../../index";
// import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
// import {observer} from "mobx-react-lite";

// const CreateDevice = observer(({show, onHide}) => {
//     const {device} = useContext(Context)
//     const [name, setName] = useState('')
//     const [price, setPrice] = useState(0)
//     const [file, setFile] = useState(null)
//     const [info, setInfo] = useState([])

//     useEffect(() => {
//         fetchTypes().then(data => device.setTypes(data))
//         fetchBrands().then(data => device.setBrands(data))
//     }, [])

//     const addInfo = () => {
//         setInfo([...info, {title: '', description: '', number: Date.now()}])
//     }
//     const removeInfo = (number) => {
//         setInfo(info.filter(i => i.number !== number))
//     }
//     const changeInfo = (key, value, number) => {
//         setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
//     }

//     const selectFile = e => {
//         setFile(e.target.files[0])
//     }

//     const addDevice = () => {
//         const formData = new FormData()
//         formData.append('name', name)
//         formData.append('price', `${price}`)
//         formData.append('img', file)
//         formData.append('brandId', device.selectedBrand.id)
//         formData.append('typeId', device.selectedType.id)
//         formData.append('info', JSON.stringify(info))
//         createDevice(formData).then(data => onHide())
//     }

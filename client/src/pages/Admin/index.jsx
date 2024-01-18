import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import Loader from '../../components/CommonComponents/Loader';
import { FaTrash } from "react-icons/fa";
const Admin = () => {

    const [menus, setMenus] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getMenus = async () => {
        const res = await axios.get("http://localhost:8000/menu")
        setMenus(res.data)
        setIsLoading(false)
    }

    const createMenu = async (data) => {
        const res = await axios.post("http://localhost:8000/menu", data)
        getMenus()
    }

    const deleteProduct = async (id) => {
        const res = await axios.delete(`http://localhost:8000/menu/${id}`)
        getMenus()
    }

    useEffect(() => {
        getMenus()
    }, [])



    return (
        <div className='  section page py-16'>
            <Helmet>
                <title>Admin</title>

            </Helmet>

            <div>
                <Formik
                    initialValues={{ title: '', info: '', price: '' }}
                    validationSchema={Yup.object({
                        title: Yup.string()
                            .max(30, 'Must be 30 characters or less')
                            .required('Required'),
                        info: Yup.string()
                            .max(50, 'Must be 50 characters or less')
                            .required('Required'),
                        price: Yup.number().positive("price must be positive").required('Required'),
                    })}
                    onSubmit={(values, { resetForm }) => {
                        createMenu(values)
                        resetForm()
                    }}
                >
                    <Form className=' bg-gray-300 py-10 px-12 max-w-[500px] mx-auto mb-10 space-y-4'>
                        <div className=' flex flex-col gap-2'>
                            <label htmlFor="title">Title</label>
                            <Field name="title" type="text" className=' border  rounded-full px-6 py-2 outline-none' />
                            <ErrorMessage name="title" />
                        </div>

                        <div className=' flex flex-col gap-2'>
                            <label htmlFor="info">Info</label>
                            <Field name="info" type="text" className=' border  rounded-full px-6 py-2 outline-none' />
                            <ErrorMessage name="info" />

                        </div>

                        <div className=' flex flex-col gap-2'>
                            <label htmlFor="price">Price</label>
                            <Field name="price" type="number" className=' border  rounded-full px-6 py-2 outline-none' />
                            <ErrorMessage name="price" />
                        </div>
                        <div className=' flex justify-center  pt-4'>
                            <button type="submit" className=' border rounded-full px-5 py-2'>Add</button>

                        </div>
                    </Form>
                </Formik>
            </div>


            <div>

                {

                    isLoading ? <Loader />
                        :

                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full text-left text-sm font-light">
                                            <thead className="border-b font-medium dark:border-neutral-500">
                                                <tr>
                                                    <th scope="col" className="px-6 py-4">Title</th>
                                                    <th scope="col" className="px-6 py-4">Info</th>
                                                    <th scope="col" className="px-6 py-4">Price</th>
                                                    <th scope="col" className="px-6 py-4">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    menus && menus.map((menu) => (
                                                        <tr key={menu._id} className="border-b dark:border-neutral-500">
                                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{menu.title}</td>
                                                            <td className="whitespace-nowrap px-6 py-4">{menu.info}</td>
                                                            <td className="whitespace-nowrap px-6 py-4">{menu.price}</td>
                                                            <td className="whitespace-nowrap px-6 py-4">
                                                                <button onClick={() => deleteProduct(menu._id)}><FaTrash /></button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}

export default Admin
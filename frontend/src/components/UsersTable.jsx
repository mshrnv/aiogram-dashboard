import React from "react";
import UserService from "../API/UserService";
import { useFetching } from "../hooks/useFetching";
import { useState, useEffect } from "react";

const UsersTable = () => {

    const [users, setUsers] = useState([])

    const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
        const response = await UserService.getAllUsers()
        setUsers([...response.data])
    })

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="container" style={{ marginTop: 15 }}>
            <h2>Users:</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Telegram ID</th>
                        <th scope="col">First_Name</th>
                        <th scope="col">Last_Name</th>
                        <th scope="col">Username</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <th scope="row">{user.id}</th>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default UsersTable;
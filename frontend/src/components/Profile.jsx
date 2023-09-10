import { useNavigate } from "react-router-dom"

const Profile = () => {
    const router = useNavigate();
    return (
        <div>
            <h1>Profile</h1>
            <button onClick={() => router('/')}>Go to Homepage</button>
        </div>
    )
}

export default Profile

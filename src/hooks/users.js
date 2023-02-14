import { doc, query } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from "lib/firebase";
import { useState } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

export function useUser(id) {

    const q = query(doc( db, "users", id ));
    const [user, isLoading] = useDocumentData(q)

    return { user, isLoading };
    
}

export function useUpdateAvatar(uid) {
    const [isLoading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const toast = useToast();
    const navigate = useNavigate();

    async function updateAvatar() {
        setLoading(true)

        const fileRef = ref(storage, "avatars/" + uid)

        await uploadBytes(fileRef, file)

        toast({
            title: "Profile Picture Uploaded",
            status: "sucess",
            isClosable: true,
            position: "top",
            duration: 5000
           })

        setLoading(false)
        navigate(0)
    }


    return {setFile, updateAvatar, isLoading}
}
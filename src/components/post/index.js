import { Box, Text } from "@chakra-ui/react";
import { Actions } from "./Actions";
import Header from "./Header";


export default function Post({ post }) {
    const { uid, text, date} = post;
    return (
        <Box 
        textAlign="left"
        p="2" 
        maxW="600px">
            <Box border="2px solid" borderColor="gray.100" borderRadius="md">
                <Header uid={uid} date={date}/>

                <Box p="2" minH="100px">
                    <Text wordBreak="break-word" fontsize="md">
                        {text}
                    </Text>
                </Box>
                <Actions/>
            </Box>
            
        </Box>
    )
}
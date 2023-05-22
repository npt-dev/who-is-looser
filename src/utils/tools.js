import React from "react";
import { Text} from 'react-native'

export const MainLogo = () => {
    return (
        <Text
            style={{
                fontFamily:'Pacifico-Regular',
                color: '#db3eb1',
                textDecorationLine: 'underline',
                textDecorationColor: '#41b6e6',
                fontSize: 30
            }}
        >
            Who is looser?
        </Text>
    )
}
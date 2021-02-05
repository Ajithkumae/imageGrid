import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';
import { colors } from '../Gloable/gloableconstant';

const Loading = ({ isActive }) => {
    return (
        <Modal
            animationType='fade'
            transparent
            onRequestClose={() => null}
            visible={isActive}
        >
            <View style={{ backgroundColor:colors.transparent, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color={colors.black} />
            </View>
        </Modal>
    )
}

export { Loading }
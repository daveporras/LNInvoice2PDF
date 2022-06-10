import React from 'react';
import { string } from 'prop-types';
import { Text as RNText, StyleSheet } from 'react-native';
import { get } from 'lodash';
import i18n from '../../utils/i18n';

const buttonStyles = styles => StyleSheet.create(styles);

const Text = ({ text, color }) => (
    <RNText
        style={buttonStyles({
            color
        })}
    >
        { text }
    </RNText>
);

Text.propTypes = {
    text: string
};

Text.defaultProps = {
    text: get(i18n, 'es.text')
};

export default Text;

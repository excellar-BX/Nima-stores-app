import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const usePasswordToggle = () => {
    const [visible, setVisibility] = useState(false);
    const Icon = visible ? <FaRegEyeSlash /> : <FaRegEye />
    onclick = () => setVisibility(visible => !visible);
const InputType = visible ? "text" : "password";
return [Icon, InputType];
}

export default usePasswordToggle;

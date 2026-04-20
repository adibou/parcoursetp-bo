import { useCallback, useState } from 'react';


export default function useModal(initial = false) {
    const [visible, setVisible] = useState(initial);
    const show = useCallback(() => setVisible(true), []);
    const hide = useCallback(() => setVisible(false), []);
    return { visible, show, hide };
}

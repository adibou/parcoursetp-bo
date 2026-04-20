import { Add, CloseCircle, Eye, EyeSlash, SearchNormal1 } from "iconsax-reactjs";
import colors from "../tokens/colors";


const ICONS = {
    'search' : SearchNormal1,
    'add': Add,
    'close': CloseCircle,
    'eye': Eye,
    'eye-off': EyeSlash,
}

type IconProps = {
    name: keyof typeof ICONS;
    size?: number;
    color?: keyof typeof colors;
};


export default function Icon({ name, size, color = 'neutral900' }: IconProps) {
    const IconComponent = ICONS[name];
    return <IconComponent size={size} color={colors[color]} />;
}

import styles from './Icon.module.css';
import Bell from '../../assets/icons/Bell.svg?react';
import Building from '../../assets/icons/Building.svg?react';
import Camera from '../../assets/icons/Camera.svg?react';
import Card from '../../assets/icons/Card.svg?react';
import Check from '../../assets/icons/Check.svg?react';
import Donation from '../../assets/icons/Donation.svg?react';
import Droplet from '../../assets/icons/Droplet.svg?react';
import Message from '../../assets/icons/Message.svg?react';
import Paypal from '../../assets/icons/Paypal.svg?react';
import Printer from '../../assets/icons/Printer.svg?react';

interface IconProps {
  iconName: string;
  aria?: string;
  size?: number;
  color?: string;
}

const colorMain = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-icon-default')
  .trim();

const iconMap: Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  Bell,
  Building,
  Camera,
  Card,
  Check,
  Donation,
  Droplet,
  Message,
  Paypal,
  Printer,
};

export default function Icon({
  iconName,
  aria,
  size = 2,
  color = colorMain,
}: IconProps): React.ReactElement {
  const SelectedIcon = iconMap[iconName] || Bell;

  return (
    <SelectedIcon
      style={{ color: `${color}`, width: `${size}rem`, height: `${size}rem` }}
      className={styles.icon}
      aria-label={aria == null ? `${iconName} icon` : aria}
      role="img"
    />
  );
}

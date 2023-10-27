import React from 'react';
import { UnstyledButton, Checkbox, Text, Image, SimpleGrid } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import iconsSmall from "./icons/index"
import classes from './AchivesBoxStyle.module.css';

function ImageCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  image,
  ...others
}) {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  return (
    <UnstyledButton
      {...others}
      onClick={() => handleChange(!value)}
      data-checked={value || undefined}
      className={classes.button}
    >
      <Image src={image} alt={title} width={40} height={40} />

      <div className={classes.body}>
        <Text color="dimmed" size="xs" lineHeight={1} marginBottom={5}>
          {description}
        </Text>
        <Text fontWeight={500} size="sm" lineHeight={1}>
          {title}
        </Text>
      </div>

      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        styles={{ input: { cursor: 'pointer' } }}
      />
    </UnstyledButton>
  );
}

const mockdata = [
  { description: 'Достижение', title: 'Посетить пляж', image: iconsSmall.sea },
  { description: 'Достижение', title: 'Погулять по городу', image: iconsSmall.city },
  { description: 'Достижение', title: 'Увидеть горы', image: iconsSmall.mountain },
  { description: 'Достижение', title: 'К зиме готов!', image: iconsSmall.winter },
];

console.log(mockdata)
export default function AchivesBox() {
  const items = mockdata.map((item) => <ImageCheckbox {...item} key={item.title} checked/>);
  return <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }}>{items}</SimpleGrid>;
}


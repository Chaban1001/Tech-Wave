'use client';

import styles from '@/components/Categories/CategoriesStyles.module.scss';
import { Camera, Gamepad, Monitor, PhoneVertical } from 'grommet-icons';
import Link from 'next/link';
import { FC, useState } from 'react';

interface CategoryBlockProps {
  backgroundColor: string;
  textColor: string;
  iconColor: string;
  href: string;
}

export const CategoriesBlocks: FC = () => {
  const [categories, setCategories] = useState<CategoryBlockProps[]>([
    {
      backgroundColor: '',
      textColor: '',
      iconColor: 'black',
      href: '/',
    },
    {
      backgroundColor: '',
      textColor: '',
      iconColor: 'black',
      href: '/computers',
    },
    { backgroundColor: '', textColor: '', iconColor: 'black', href: '/' },
    { backgroundColor: '', textColor: '', iconColor: 'black', href: '/' },
    { backgroundColor: '', textColor: '', iconColor: 'black', href: '/' },
  ]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCategoryClick = (
    index: number,
    backgroundColor: string,
    textColor: string,
    iconColor: string,
    href: string
  ) => {
    const updatedCategories = [...categories];
    if (activeIndex !== null && activeIndex !== index) {
      updatedCategories[activeIndex] = {
        backgroundColor: '',
        textColor: '',
        iconColor: '',
        href: '',
      };
    }
    updatedCategories[index] = { backgroundColor, textColor, iconColor, href };
    setCategories(updatedCategories);
    setActiveIndex(index);
  };

  return (
    <div className={styles.categories__blocks}>
      {categories.map((category, index) => (
        <Link
          href={category.href}
          key={index}
          className={styles.categoryBlock__item}
          onClick={() =>
            handleCategoryClick(
              index,
              '#db4444',
              'white',
              'white',
              category.href
            )
          }
          style={{ background: category.backgroundColor }}
        >
          {index === 0 && <PhoneVertical color={category.iconColor} />}
          {index === 1 && <Monitor color={category.iconColor} />}
          {index === 2 && <Camera color={category.iconColor} />}
          {index === 3 && <PhoneVertical color={category.iconColor} />}
          {index === 4 && <Gamepad color={category.iconColor} />}
          <h5
            className={styles.categoryBlock__title}
            style={{ color: category.textColor }}
          >
            {index === 0 && 'Phones'}
            {index === 1 && 'Computers'}
            {index === 2 && 'Camera'}
            {index === 3 && 'Headphones'}
            {index === 4 && 'Gaming'}
          </h5>
        </Link>
      ))}
    </div>
  );
};

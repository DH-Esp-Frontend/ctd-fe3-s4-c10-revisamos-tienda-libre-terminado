import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/Header.module.css";
import {
  localeNames,
  locales,
  TEXTS_BY_LANGUAGE,
  defaultLocale,
} from "../../../locale/constants";

const Header = () => {
  // Traemos la información del idioma utilizando useRouter()
  const { locale, asPath } = useRouter();

  const { HEADER } =
    TEXTS_BY_LANGUAGE[locale] ?? TEXTS_BY_LANGUAGE[defaultLocale];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <figure>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </figure>
        <div className={styles.appName}>
          <p>tienda</p>
          <p>libre</p>
        </div>
      </div>
      <div className={styles.navbar}>
        <Link href="./">{`${HEADER.PRODUCTS}`}</Link>
        <Link href="./tycs">{`${HEADER.TYCS}`}</Link>
      </div>
      <div className={styles.localeSwitch}>
        {/* Mediante el atributo locale le indicamos a Next que idioma queremos utilizar al hacer la
          redirección
           */}
        <Link href={asPath} locale={locales.ES_ES}>
          <p className={locale === locales.ES_ES ? styles.active : ""}>
            <Image
              src="/spanish.png"
              alt="spanish"
         
              width={20}
              height={20}
            />
            {localeNames[locales.ES_ES]}
          </p>
        </Link>
        <Link href={asPath} locale={locales.PT_BR}>
          <p className={locale === locales.PT_BR ? styles.active : ""}>
            <Image
              src="/brazil.png"
              alt="usa"
           
              width={20}
              height={20}
            />
            {localeNames[locales.PT_BR]}
          </p>
        </Link>
        <Link href={asPath} locale={locales.EN_US}>
          <p className={locale === locales.EN_US ? styles.active : ""}>
            <Image
              src="/usa.png"
              alt="usa"
           
              width={20}
              height={20}
            />
            {localeNames[locales.EN_US]}
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;

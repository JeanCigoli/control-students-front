import React, { useEffect, useState } from 'react';

import bannerImage from '../../../../assets/bus.png';
import { SessionStorage } from '../../../../utils/storage/session';
import { SESSION_AUTH } from '../../../../main/config/constants';
import { BannerContainer } from './styled';

const Profile: React.FC = () => {
  const [auth, setAuth] = useState<{ [params: string]: any } | null>(null);

  useEffect(() => {
    const sessionAuth = SessionStorage.getItem(SESSION_AUTH);

    setAuth(sessionAuth);
  }, []);

  return (
    <BannerContainer>
      <h1>{auth ? auth.name : ''}</h1>

      <p>{auth ? auth.type : ''}</p>

      <img src={bannerImage} alt="Banner da imagem de um ônibus" />
    </BannerContainer>
  );
};

export default Profile;

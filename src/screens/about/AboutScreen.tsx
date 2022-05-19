import {Linking} from 'react-native';
import {Text, Button} from 'react-native-paper';
import React, {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';
import {GithubUser} from './types';
import styled from 'styled-components/native';
import StyledBrandApp from '../../components/molecules/styledBrandApp/StyledBrandApp';

const AboutScreen = () => {
  const [data, setData] = useState<GithubUser>({} as GithubUser);

  useEffect(() => {
    axios.get('https://api.github.com/users/eastor112').then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <ViewContainer>
      <ViewAppInfoContainer>
        <StyledBrandApp />
        <ViewAppInfo>
          <Text>This app was developed using React Native.</Text>
          <Text>Current version: 1.0.0</Text>
          <Text> All rights reserved.</Text>
          <Text>2022-2030 &copy;</Text>
        </ViewAppInfo>
      </ViewAppInfoContainer>

      {Object.keys(data).length === 0 ? null : (
        <ViewDeveloperInfo>
          <ImageProfie
            source={{
              uri: data.avatar_url,
            }}
          />
          <Text>Developed by</Text>
          <Text>
            {data.name} ({data.location})
          </Text>

          <NumbersGithub>
            <Text>Repositories: {data.public_repos}</Text>
            <TextFollowers>Followers: {data.followers}</TextFollowers>
          </NumbersGithub>

          <ViewGetInTouchContainer>
            <Button
              icon={'linkedin'}
              onPress={() =>
                Linking.openURL('https://www.linkedin.com/in/eastor112/')
              }>
              LinkedIn
            </Button>
            <Button
              icon={'github'}
              onPress={() => Linking.openURL(data.html_url)}>
              GitHub
            </Button>
            <Button icon={'web'} onPress={() => Linking.openURL(data.blog)}>
              Web
            </Button>
          </ViewGetInTouchContainer>
        </ViewDeveloperInfo>
      )}
    </ViewContainer>
  );
};

export default AboutScreen;

const ViewContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const ViewAppInfoContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const ViewAppInfo = styled.View`
  top: -50px;
  align-items: center;
`;

const ViewDeveloperInfo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const ImageProfie = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const NumbersGithub = styled.View`
  flex-direction: row;
`;

const TextFollowers = styled(Text)`
  padding-left: 15px;
`;

const ViewGetInTouchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

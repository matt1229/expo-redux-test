import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Card,
  CardItem,
  Thumbnail,
  Body,
  Title,
  Right
} from "native-base";
import { View } from "react-native";

// Components
import Loading from "@components/loading/Loading";

// Actions
import { Logout } from "@components/login/LoginActions";
import GetHeroes from "@components/dashboard/DashboardActions";

// Styles
import Styles from "@components/dashboard/DashboardStyles";

class Dashboard extends Component {
  static propTypes = {
    GetHeroes: PropTypes.func.isRequired,
    // data: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    // data: []
  };

  render = () => {
    const { data, GetHeroes: getAll } = this.props;
    getAll();

    if (!data)
     return <Loading />;

    return (
      <Container>
        <Header style={{ borderBottomWidth: 0 }}>
          <Left>
            <Text>All</Text>
          </Left>
          <Body>
            <Title>React Native Starter</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            {
              data &&
              data.map((d) => 
                <Content>
                  {
                    d['figpins'].map(f => 
                      <Card>
                        <CardItem>
                        <Left>
                          <Body>
                            <Text>{d.name}</Text>
                            <Text>{d.vault_id}</Text>
                          </Body>
                        </Left>
                      </CardItem>
                        <CardItem cardBody>
                        <Thumbnail source={{ uri: f.img_url_sm }} />
                        </CardItem>
                        <CardItem>
                          <Left>
                            <Text>{f.name}</Text>
                          </Left>
                          <Body>
                            <Text>{f.artist_name}</Text>
                          </Body>
                          <Right>
                            <Text>{f.lifecycle_stage}</Text>
                          </Right>
                        </CardItem>
                      </Card>
                    )
                  }
                </Content>
              )
            }
        </Content>
      </Container>
    );
  };
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  isLoading: state.hero.loading,
  data: state.hero.data
});

const mapDispatchToProps = {
  Logout,
  GetHeroes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

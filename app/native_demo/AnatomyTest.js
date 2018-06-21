import React, {Component} from "react";
import {
    Container, Header, Title, Content, Button, Icon
} from "native-base";
import FetchData from "../net/FetchData";

/**
 * Created by marno on 2017/1/16
 * Desc:
 */

export default class AnatomyTest extends Component {
    render() {
        return (
            <Container>
                <Header>

                    <Button transparent>
                        <Icon name='ios-arrow-back'/>
                    </Button>

                    <Title>Beauty</Title>

                    <Button transparent>
                        <Icon name='ios-menu'/>
                    </Button>
                </Header>

                <Content>
                    <FetchData/>
                </Content>
            </Container>
        )
    }
}
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import { X } from 'react-feather';
import '@reach/dialog/styles.css';

import { IconButton } from '../IconButton';
import { Button } from '../Button';
import { DiceChooser } from './DiceChooser';

export function SettingsDialog({ currentSettings, setSettings }) {
  const [internalSettings, setInternalSettings] = useState(currentSettings);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    setInternalSettings(currentSettings);
  }, [currentSettings]);

  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  const save = () => {
    setSettings(internalSettings);
    setShowDialog(false);
  };

  const sortById = (dice) => {
    return dice.sort((a, b) => a.id - b.id);
  };

  const setDiceConfig = ({ id, size, color }) => {
    const otherDice = internalSettings.dice.filter((die) => die.id !== id);
    const sortedDice = sortById([{ id, size, color }, ...otherDice]);

    setInternalSettings({
      ...internalSettings,
      dice: sortedDice,
    });
  };

  const removeDie = (id) => {
    const otherDice = internalSettings.dice.filter((die) => die.id !== id);
    setInternalSettings({
      ...internalSettings,
      dice: sortById(otherDice),
    });
  };

  const addDie = () => {
    const lastId = internalSettings.dice.reduce((acc, curr) => {
      return Math.max(acc, curr.id);
    }, 0);

    setInternalSettings({
      ...internalSettings,
      dice: [
        ...internalSettings.dice,
        {
          id: lastId + 1,
          size: 'medium',
          color: 'black',
        },
      ],
    });
  };

  return (
    <Wrapper>
      <SettingsButton>
        <IconButton icon="settings" onClick={open} label="Settings" />
      </SettingsButton>
      <StyledDialog
        isOpen={showDialog}
        onDismiss={save}
        aria-labelledby="settings-title"
      >
        <CloseButton type="button" className="close-button" onClick={close}>
          <IconContainer>
            <VisuallyHidden>Cancel</VisuallyHidden>
            <X aria-hidden size={18} />
          </IconContainer>
        </CloseButton>
        <Title id="settings-title">Settings</Title>
        <SettingsSection>
          <TitleBar>
            <SectionTitle>Dice</SectionTitle>
            <IconButton icon="add" size={24} onClick={() => addDie()} />
          </TitleBar>
          {internalSettings.dice.map((die) => {
            return (
              <DiceChooser
                {...die}
                setDiceConfig={setDiceConfig}
                removeDie={removeDie}
                key={die.id}
              />
            );
          })}
        </SettingsSection>
        <ButtonBar>
          <Button onClick={save}>Save</Button>
        </ButtonBar>
      </StyledDialog>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const SettingsButton = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;
`;

const StyledDialog = styled(Dialog)`
  position: relative;

  box-shadow: hsl(0deg 0% 100% / 10%) 0px 1px 1px 0px inset,
    hsl(240deg 30% 28% / 25%) 0px 50px 100px -20px,
    hsl(0deg 0% 0% / 30%) 0px 30px 60px -30px;

  @media (max-width: 400px) {
    width: 95vw;
    padding: 1rem;
  }

  > [data-reach-dialog-content] {
  }
`;

const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.secondary.text};

  border: ${({ theme }) => theme.colors.secondary.dark} 1px solid;

  width: 32px;
  height: 32px;

  position: absolute;
  top: -8px;
  right: 8px;

  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: ${28 / 16}rem;

  padding-bottom: 32px;
`;

const SettingsSection = styled.section``;

const SectionTitle = styled.h3``;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonBar = styled.div`
  padding-top: 32px;

  display: flex;
  justify-content: center;
`;

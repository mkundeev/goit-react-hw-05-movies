import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieArticle = styled.article`
  padding: 20px;
`;
export const MovieWrap = styled.div`
  display: flex;
  gap: 20px;
  max-height: fit-content;
  width: 600px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const MoviePoster = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  height: 100%;
  width: 50%;
`;
export const MovieInfoPartsWrap = styled.div`
  margin-bottom: 20px;
`;
export const MovieAdditionalInfoList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const AdditionalInfoWrap = styled.div`
  padding: 10px 0;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;
export const GoBackButton = styled(Link)`
  display: block;
  background-color: #ccc;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 4px;
  color: black;
  display: flex;
  text-decoration: none;
  align-items: flex-end;
  gap: 5px;
`;

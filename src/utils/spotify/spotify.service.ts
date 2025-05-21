import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as qs from 'qs';
import * as fs from 'fs';
import { Parser } from 'json2csv';
import { ResponseCode } from 'src/response/response-code.enum';

@Injectable()
export class SpotifyService {
  private readonly verifyUrl = 'https://accounts.spotify.com/api/token';
  private readonly searchUrl = 'https://api.spotify.com/v1/search';
  private readonly analysisUrl = 'https://api.spotify.com/v1/audio-analysis';

  async getAccessToken(): Promise<string> {
    const credentials = `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`;
    const encodedCredentials = Buffer.from(credentials).toString('base64');

    const response = await axios.post(
      this.verifyUrl,
      qs.stringify({ grant_type: 'client_credentials' }),
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return response.data.access_token;
  }

  async search(keyword, offset,limit){
    const accessToken = await this.getAccessToken();
    console.log('access',accessToken);
    const {data} = await axios.get(this.searchUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        q: keyword,
        type: 'track,artist', 
        limit,
        offset,
      },
    });
   return data;
  }



  async getAudioAnalysis(trackId: string): Promise<any> {
    const accessToken = await this.getAccessToken();

    try {
      const response = await axios.get(`${this.analysisUrl}/${trackId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error(ResponseCode.ANALYSIS_NOT_FOUND); 
    }
  }

  




} 
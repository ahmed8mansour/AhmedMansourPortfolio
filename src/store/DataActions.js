import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

// تأكد إنك معرف backendURL مسبقًا
const backendURL = 'http://localhost:8000'

// export const fetchData = createAsyncThunk
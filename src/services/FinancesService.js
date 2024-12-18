import http from '../ApiFinances'

class FinancesService{
    getAll() {
        return http.get('/finances');
    }

    getOne(finance){
        return http.get(`/finances/${finance}`);
    }
    
    create(data){
        return http.post('/finances',data);
    }

    update(finance, data){
        return http.put(`/finances/${finance}`, data);
    }

    delete(finance) {
        return http.delete(`/finances/${finance}`);
    }
}

export default new FinancesService();

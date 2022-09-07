package com.devsuperior.dsmeta.sevices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sales;
import com.devsuperior.dsmeta.repository.SalesRepository;

@Service
public class SalesService {
	
	@Autowired
	private SalesRepository repository;

	public List<Sales> findSales() {
	return	repository.findAll();
	}
	
}